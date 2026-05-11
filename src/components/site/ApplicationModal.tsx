import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  residencyType: "Professional" | "Emerging";
}

export function ApplicationModal({ isOpen, onClose, residencyType }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    category: "Visual Art",
    request: "",
  });
  const [wordCount, setWordCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const countWords = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleRequestChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    const currentWords = countWords(val);
    
    // Only update if within limit or if user is deleting text
    if (currentWords <= 100 || val.length < formData.request.length) {
      setFormData({ ...formData, request: val });
      setWordCount(currentWords);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity animate-in fade-in duration-500" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-xl bg-charcoal/95 backdrop-blur-md p-8 md:p-12 rounded-sm shadow-[0_0_50px_rgba(96,165,250,0.15)] border border-white/5 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <Reveal>
              <div className="flex justify-center">
                <CheckCircle2 size={64} className="text-primary animate-pulse" />
              </div>
              <h2 className="font-serif text-3xl text-white mt-6">Application Received</h2>
              <p className="text-white/60 tracking-wide uppercase text-xs">
                We will review your proposal and get in touch.
              </p>
            </Reveal>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                Residency Application
              </p>
              <h2 className="font-serif text-3xl text-white">
                {residencyType} Residency
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Name</label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-primary transition-colors outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Contact (Email/WhatsApp)</label>
                <input 
                  required
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-primary transition-colors outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Artist Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-primary transition-colors outline-none appearance-none cursor-pointer"
                >
                  <option className="bg-charcoal" value="Visual Art">Visual Art</option>
                  <option className="bg-charcoal" value="Music / Sound">Music / Sound</option>
                  <option className="bg-charcoal" value="Film / Video">Film / Video</option>
                  <option className="bg-charcoal" value="Literature / Writing">Literature / Writing</option>
                  <option className="bg-charcoal" value="Performance">Performance</option>
                  <option className="bg-charcoal" value="Research / Curation">Research / Curation</option>
                  <option className="bg-charcoal" value="Craft / Design">Craft / Design</option>
                </select>
              </div>

              <div className="space-y-1 relative">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Request</label>
                <textarea 
                  required
                  value={formData.request}
                  onChange={handleRequestChange}
                  placeholder="Describe your intended focus (100 words max)..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-primary transition-colors outline-none resize-none"
                />
                <div className={`absolute bottom-[-20px] right-0 text-[9px] uppercase tracking-tighter ${wordCount >= 100 ? "text-primary" : "text-white/30"}`}>
                  {wordCount} / 100 Words
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-8 rounded-full bg-white text-charcoal py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.3)]"
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
