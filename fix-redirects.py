import os

def replace_in_files(directory, old_string, new_string):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.html', '.js', '.css', '.json')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if old_string in content:
                        new_content = content.replace(old_string, new_string)
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Replaced in {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

# Replace absolute URLs with relative or localhost
directory_to_scan = 'c:/Users/Admin/OneDrive/Desktop/terracekilifi/terracekilifisite'

# Fix the main domain
replace_in_files(directory_to_scan, 'https://www.terracekilifi.com', '')
replace_in_files(directory_to_scan, 'https://terracekilifi.com', '')
replace_in_files(directory_to_scan, 'www.terracekilifi.com', 'localhost:8080')
replace_in_files(directory_to_scan, 'terracekilifi.com', 'localhost:8080')

# Also fix protocol-less URLs if they exist
replace_in_files(directory_to_scan, '//www.terracekilifi.com', '//localhost:8080')
