import { useState, useEffect, FormEvent } from "react";
import { X } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  residencyType: "Professional" | "Emerging";
}

export function ApplicationModal({ isOpen, onClose, residencyType }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    nationality: "", 
    socialMedia: "", 
    artistCategory: "",
    soloOrGroup: "Solo",
    numberOfPeople: 1,
    stayDatesStart: "",
    stayDatesEnd: "",
    stayLogistics: "Bed only",
    projectDescription: "",
  });

  const [wordCount, setWordCount] = useState(0);
  const MAX_WORDS = 200;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle word count for textarea
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    
    if (words.length <= MAX_WORDS) {
      setFormData({ ...formData, projectDescription: text });
      setWordCount(words.length);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --- Dynamic Copy based on Residency Type ---
  const isProfessional = residencyType === "Professional";
  const introText = isProfessional
    ? "Are you a professional artist or group needing a getaway on a subsidised budget? Fill out the details below."
    : "Are you an upcoming artist looking to cultivate your voice? Apply for our free Emerging Residency below.";

  // --- Date Blocking Logic ---
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const isDateBlocked = (dateString: string) => {
    if (!isProfessional || !dateString) return false;

    const date = new Date(dateString);
    const month = date.getMonth(); // 0-indexed
    const day = date.getDate();

    // Block Oct 20th - 31st
    if (month === 9 && day >= 20 && day <= 31) return true;
    
    // Block Dec 28th - Jan 15th
    if (month === 11 && day >= 28) return true; 
    if (month === 0 && day <= 15) return true;  

    return false;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isProfessional && isDateBlocked(value)) {
      alert("These dates are unavailable due to Festival blockouts (Oct 20-31 and Dec 28-Jan 15). Please select alternative dates.");
      setFormData({ ...formData, [name]: "" }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // --- Custom Email Template Submit Trigger ---
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipientEmail = "hello@theterracekilifi.com";
    const emailSubject = `${residencyType} Residency Application - ${formData.name}`;
    
    // Building a structured, highly legible plaintext text layout
    const emailBody = `Residency Application Details
=============================================
Residency Type: ${residencyType}
Applicant Name: ${formData.name}
Contact Info:   ${formData.contact}
Nationality:    ${formData.nationality}
Website/Social: ${formData.socialMedia || "Not provided"}

Practice Profile
---------------------------------------------
Creative Category:   ${formData.artistCategory}
Attendance Style:    ${formData.soloOrGroup} (${formData.numberOfPeople} person/people total)
Logistics Preferred: ${formData.stayLogistics}

Proposed Window
---------------------------------------------
Check-in Target:  ${formData.stayDatesStart}
Check-out Target: ${formData.stayDatesEnd}

Project Intent & Focus
---------------------------------------------
${formData.projectDescription}
=============================================`;

    // Construct URI protected values for mailto trigger
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Direct link trigger to native or web-based default email software
    window.location.href = mailtoUrl;
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-background rounded-sm shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/40 shrink-0">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-primary">
              {residencyType} Application
            </h2>
            <p className="text-sm text-foreground/70 mt-2 pr-8">{introText}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary/50 rounded-full transition-colors absolute top-6 right-6"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground/70" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Standard Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your full name or group name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Contact</label>
                <input
                  required
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Email or Phone number"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Nationality</label>
                <input
                  required
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your nationality"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Website / Socials</label>
                <input
                  type="text"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Portfolio link or social handle"
                />
              </div>
            </div>

            {/* Artist Details Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Category</label>
                <input
                  required
                  type="text"
                  name="artistCategory"
                  value={formData.artistCategory}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="e.g. Visual Art, Sound"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Type</label>
                <select
                  name="soloOrGroup"
                  value={formData.soloOrGroup}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="Solo">Solo</option>
                  <option value="Group">Group</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">People</label>
                <input
                  required
                  type="number"
                  min="1"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Dates & Logistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-secondary/10 rounded-sm border border-border/30">
              
              {/* Dates Column */}
              <div className="flex flex-col justify-between">
                <label className="text-sm font-bold text-primary uppercase tracking-wider mb-3 block">
                  Proposed Stay Dates
                </label>
                
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div>
                    <span className="block text-[10px] text-foreground/60 uppercase mb-1 font-bold tracking-wide">Check-in</span>
                    <input
                      required
                      type="date"
                      name="stayDatesStart"
                      min={getMinDate()}
                      value={formData.stayDatesStart}
                      onChange={handleDateChange}
                      className="w-full p-3 text-sm bg-background border border-border/50 rounded-sm focus:outline-none focus:border-primary cursor-pointer transition-colors"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-foreground/60 uppercase mb-1 font-bold tracking-wide">Check-out</span>
                    <input
                      required
                      type="date"
                      name="stayDatesEnd"
                      min={formData.stayDatesStart || getMinDate()}
                      value={formData.stayDatesEnd}
                      onChange={handleDateChange}
                      className="w-full p-3 text-sm bg-background border border-border/50 rounded-sm focus:outline-none focus:border-primary cursor-pointer transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Logistics Column */}
              <div className="flex flex-col justify-between">
                <label className="text-sm font-bold text-primary uppercase tracking-wider mb-3 block">
                  Logistics Preference
                </label>
                <div className="mt-auto">
                  <span className="block text-[10px] text-transparent select-none mb-1">Spacer</span>
                  <select
                    name="stayLogistics"
                    value={formData.stayLogistics}
                    onChange={handleChange}
                    className="w-full p-3 text-sm bg-background border border-border/50 rounded-sm focus:outline-none focus:border-primary cursor-pointer transition-colors"
                  >
                    <option value="Bed only">Bed only</option>
                    <option value="Bed and Breakfast">Bed and Breakfast</option>
                    <option value="Full Board">Full Board</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Project Focus</label>
                <span className={`text-xs font-medium ${wordCount >= MAX_WORDS ? 'text-red-500' : 'text-foreground/50'}`}>
                  {wordCount} / {MAX_WORDS} words
                </span>
              </div>
              <textarea
                required
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleDescriptionChange}
                rows={4}
                className="w-full p-4 bg-secondary/20 border border-border/50 rounded-sm focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                placeholder="Describe the project that you intend to focus on at the residency..."
              />
            </div>
            
            {/* Submit Button */}
            <div className="pt-6 border-t border-border/30 flex justify-end">
               <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-sm bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Generate Email Application
                </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}