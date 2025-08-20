import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

// About Section
export const AboutSection = () => <div className="space-y-4 animate-slide-up">
    <div className="command-prompt">$ cat /about/me.txt</div>
    <div className="terminal-text">
      <div className="mb-4">
        <div className="terminal-text-bright text-lg mb-2">Hi, Im Luis</div>
        <div className="terminal-text-dim">Software Developer & Cybersecurity Analyst</div>
      </div>
      
      <div className="space-y-3 text-sm leading-relaxed">
        <p>Welcome to my digital portfolio! I'm a software dev with a passion for cybersecurity, particularly red teaming, or offensive security. I've always liked tearing things apart and learning how and why it works. Breaking software down to its most basic components and hunting down vulnerabilities are things that I have been obsessed with ever since I hacked my first video game as kid. I decided to pursue a career in software dev and cybersecurity because it combines two things I really enjoy; technology and puzzles. I also really like the hands on nature of problem solving in tech when it comes to development or cybersecurity; need a solution to a specific problem? build it, Dont like how a certain thing works or looks? change it.</p>
        <p>In my down time I like to play video games 🎮, and Workout 🏋️‍♂️</p>
        <p>This terminal interface was inspired by two things, firstly the in-game terminals in the Fallout games that you needed to "hack" in to, in order to gain access to something, as well one of the first complex projects I worked on when I first started coding, which was a custom shell.</p>
      </div>

      <div className="mt-6 p-3 border border-border rounded">
        <div className="terminal-text-bright mb-2">Quick Stats:</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>→ Experience: 3+ years</div>
          <div>→ Location: Aguadilla, PR</div>
          <div>→ Favorite Coding Language: C</div>
          <div>→ Hobby/Skill Im currently working on: Reverse Engineering</div>
        </div>
      </div>
    </div>
  </div>;

// Skills Section
export const SkillsSection = () => {
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 4000); // Hide after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4 animate-slide-up">
      <div className="command-prompt">$ ls -la /skills/</div>
      
      {/* Scroll hint notification */}
      {showScrollHint && (
        <div className="fixed top-4 right-4 bg-black border border-green-500 text-green-400 px-3 py-2 rounded text-xs font-mono animate-pulse z-50">
          <div className="flex items-center gap-2">
            <span>💡</span>
            <span>Scroll down to see all skills</span>
            <span className="text-green-600">↓</span>
          </div>
        </div>
      )}

      <div className="terminal-text">
        <div className="space-y-6">
        <div>
          <div className="terminal-text-bright mb-2">Proficient Coding Languages:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ C</div>
            <div>→ C++</div>
            <div>→ Python</div>
            <div>→ Javascript</div>
            <div>→ Bash</div>
            <div>→ Ruby</div>
            <div>→ Typescript</div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Frontend Technologies:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ React/Next.js</div>
            <div>→ TypeScript</div>
            <div>→ Tailwind CSS</div>
            <div>→ Vue.js</div>
            <div>→ HTML5/CSS3</div>
            <div>→ JavaScript ES6+</div>
            <div>→ Astro</div>
            <div>→ Angular</div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Backend & Database:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ Node.js</div>
            <div>→ Python</div>
            <div>→ PostgreSQL</div>
            <div>→ MongoDB</div>
            <div>→ REST APIs</div>
            <div>→ Django</div>
            <div>→ Flask</div>
            <div>→ SQL/MySQL</div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Tools & DevOps:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ Git/GitHub</div>
            <div>→ Docker</div>
            <div>→ AWS/Vercel</div>
            <div>→ Linux/Unix</div>
            <div>→ CI/CD</div>
          </div>
        </div>

        <div className="mt-6 p-3 border border-border rounded">
          <div className="terminal-text-bright mb-2">Favorite Coding Languages</div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>C</span>
              <span>██████████ 99%</span>
            </div>
            <div className="flex justify-between">
              <span>C++</span>
              <span>█████████░ 85%</span>
            </div>
            <div className="flex justify-between">
              <span>Python</span>
              <span>█████████░ 82%</span>
            </div>
            <div className="flex justify-between">
              <span>Javascript</span>
              <span>████████░░ 75%</span>
            </div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Red Teaming & Offensive Security</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ Passive Reconnaissance</div>
            <div>→ Active Reconnaissance</div>
            <div>→ Nmap (Basic & Advanced Scans, Scripting)</div>
            <div>→ Burp Suite</div>
            <div>→ SQL & NoSQL Injection</div>
            <div>→ Web App Forensics & Incident Response</div>
            <div>→ Metasploit Framework & Scripting</div>
            <div>→ CVE/CWE/NVD Analysis</div>
            <div>→ Windows Privilege Escalation</div>
            <div>→ Access Persistence Techniques</div>
            <div>→ Buffer Overflow Exploitation</div>
            <div>→ Ruby Scripting for Exploits</div>
            <div>→ Cryptography (as it relates to offensive use)</div>
            <div>→ Active Directory (Enumeration, Exploitation, Forensics, Hardening)</div>
            <div>→ Linux Privilege Escalation (SUID, SGID, custom scripts, What the Shell?)</div>
            <div>→ Web Exploitation (OWASP Top 10, File Inclusions, IDOR, Upload Vulns, Command Injection, SSRF)</div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Reverse Engineering & Malware Analysis</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ Static & Dynamic Analysis (Binary & Mobile)</div>
            <div>→ Reverse Engineering Fundamentals</div>
            <div>→ Malware Analysis Techniques</div>
            <div>→ Mobile Security (Static & Dynamic Analysis)</div>
            <div>→ Obfuscation & Evasion Techniques (if done in any of your mobile RE)</div>
            <div>→ Basics of Video Game Hacking (Memory Editing, Cheat Creation, Cheat Engine)</div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Forensics & Defensive Security</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ Linux/Windows Forensics</div>
            <div>→ Web Application Forensics</div>
            <div>→ Digital Evidence Handling</div>
            <div>→ Incident Response Methodologies</div>
            <div>→ Packet & Traffic Analysis (Wireshark, Packet Dissection)</div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">Core Security Knowledge</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ml-4">
            <div>→ Linux Security & Bash Scripting</div>
            <div>→ Protocols & Servers</div>
            <div>→ Offensive & Defensive Security Concepts</div>
            <div>→ Ethics in Cybersecurity</div>
            <div>→ ISO 2700X, NIST Frameworks</div>
            <div>→ GDPR & Privacy Regulations</div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

// Projects Section
export const ProjectsSection = () => <div className="space-y-4 animate-slide-up">
    <div className="command-prompt">$ find /projects -type f -name "*.project"</div>
    <div className="terminal-text">
      <div className="space-y-6">
        <div className="border border-border rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="terminal-text-bright">Terminal Portfolio Website</div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="text-xs h-6"
                onClick={() => window.open('', '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
              {/* <Button size="sm" variant="outline" className="text-xs h-6">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button> */}
            </div>
          </div>
          <div className="terminal-text-dim text-sm mb-2">React, HTML, Javascript, TypeScript, CSS, Tailwind CSS</div>
          <div className="text-sm">
            A retro-style portfolio website with terminal interface, Inspired by the fallout games, with working CLI navigation
          </div>
        </div>

        <div className="border border-border rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="terminal-text-bright">Snake: CLI Recconaissance Tool</div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="text-xs h-6"
                onClick={() => window.open('https://github.com/LS7710/Snake-Custom-Reconnaissance-Tool', '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
              {/* <Button size="sm" variant="outline" className="text-xs h-6">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button> */}
            </div>
          </div>
          <div className="terminal-text-dim text-sm mb-2">Python</div>
          <div className="text-sm">
            A Reconnisannce CLI tool that extracts most of the commonly sought after information from a target website, during the recconaissance stage of a penetration test.
          </div>
        </div>

        <div className="border border-border rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="terminal-text-bright">Motion Minds</div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="text-xs h-6"
                onClick={() => window.open('https://github.com/gomez7373/motionminds', '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
              {/* <Button size="sm" variant="outline" className="text-xs h-6">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button> */}
            </div>
          </div>
          <div className="terminal-text-dim text-sm mb-2">React, HTML, CSS, Javascript, Three.js, WebGL, WebXR</div>
          <div className="text-sm">
            An interactive wellness app, with the purpose of helping people with ADHD and other similar mentall ilnesses, to take control of their lives by providing an all purpose tool, with several features like daily habit tracjers and even a virtual reality relaxation space
          </div>
        </div>

        <div className="border border-border rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="terminal-text-bright">Sentinel Virtual S.O.C. (Security Operations Center)</div>
            <div className="flex gap-2">
              {/* <Button 
                size="sm" 
                variant="outline" 
                className="text-xs h-6"
                onClick={() => window.open('', '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button> */}
              {/* <Button size="sm" variant="outline" className="text-xs h-6">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button> */}
            </div>
          </div>
          <div className="terminal-text-dim text-sm mb-2">ELK, Wazuh, TheHive, Cortex, Shuffle, Ansible, Sysmon</div>
          <div className="text-sm">
            A Containerized Virtual Security Operations Center, designed to provide hands-on training for blue team analysts in threat detection, and incident response.
          </div>
        </div>

        <div className="border border-border rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="terminal-text-bright">Amity's Designs Company Website</div>
            <div className="flex gap-2">
              {/* <Button 
                size="sm" 
                variant="outline" 
                className="text-xs h-6"
                onClick={() => window.open('', '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button> */}
              {/* <Button size="sm" variant="outline" className="text-xs h-6">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button> */}
            </div>
          </div>
          <div className="terminal-text-dim text-sm mb-2">React, HTML CSS, Tailwind CSS, JavaScript</div>
          <div className="text-sm">
            Designed and created company’s website based on the clients’ requests and specifications. Developed the website with a scalable architecture to support future feature expansions, including a marketplace and admin panel.
          </div>
        </div>

        <div className="border border-border rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="terminal-text-bright">Custom Bash Shell</div>
            <div className="flex gap-2">
              {/* <Button 
                size="sm" 
                variant="outline" 
                className="text-xs h-6"
                onClick={() => window.open('', '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button> */}
              {/* <Button size="sm" variant="outline" className="text-xs h-6">
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button> */}
            </div>
          </div>
          <div className="terminal-text-dim text-sm mb-2">C (Programming Language)</div>
          <div className="text-sm">
            Created a custom shell in C, with the purpose of learning how shells work and how to create one from scratch. It has basic functionality like command execution, piping, and redirection, as well as some custom commands and features.
          </div>
        </div>
                {/* This is for text under projects, not realy needed rn */}
        {/* <div className="mt-4 text-xs terminal-text-dim">
          Use commands like 'cd project-name' to explore individual projects or 
          'git clone &lt;repo&gt;' to view source code.
        </div> */}
      </div>
    </div>
  </div>;

// Resume Section
export const ResumeSection = () => {
  const handleDownloadResume = (type: 'cybersecurity' | 'software-dev') => {
    const resumeUrls = {
      'cybersecurity': '/cybersecurity-resume.pdf',
      'software-dev': '/software-dev-resume.pdf'
    };
    
    const filenames = {
      'cybersecurity': 'Luis_Soto_Cybersecurity_Resume.pdf',
      'software-dev': 'Luis_Soto_Software_Dev_Resume.pdf'
    };
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrls[type];
    link.download = filenames[type];
    link.target = '_blank'; // Open in new tab as fallback
    
    // Append to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4 animate-slide-up">
      <div className="command-prompt">$ cat /resume/experience.txt</div>
      <div className="terminal-text">
        <div className="space-y-6">
          <div>
            <div className="terminal-text-bright text-lg mb-4">Luis Soto - Software Developer and Cybersecurity Analyst</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
              <div>📧 luissoto7710@gmail.com</div>
              <div>📱 +1 (939) 349-2373</div>
              <div>🌐 linkedin.com/in/luis-soto-4577353bb</div>
              <div>📍 Aguadilla, Puerto Rico</div>
            </div>
          </div>

          <div>
            <div className="terminal-text-bright mb-2">EXPERIENCE</div>
            <div className="space-y-4 ml-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div className="terminal-text-bright">Hackfinity Competition</div>
                  <div className="terminal-text-dim text-xs">2025</div>
                </div>
                <div className="terminal-text-dim text-sm mb-2">Try Hack Me</div>
                <ul className="text-sm space-y-1 list-disc ml-4">
                  <li>Competed in a 3 day large scale CTF battle against more than 11,000 participants and made top 10th percentile</li>
                  <li>Completed CTFs based on every aspect of cybersecurity, from Web vulns to OSINT and even game hacking</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div className="terminal-text-bright">Web Development, Tool Creation & Coding Tutor</div>
                  <div className="terminal-text-dim text-xs">2024 - Current</div>
                </div>
                <div className="terminal-text-dim text-sm mb-2">Freelance Software Developer</div>
                <ul className="text-sm space-y-1 list-disc ml-4">
                  <li>Designed and created websites for local companies following clients’ vision and specifications </li>
                  <li>Created custom portfolio pages for students and career professionals.</li>
                  <li>Created custom tools and scripts for data analysis for students studying Bioinformatics in college.</li>
                  <li>Served as a coding tutor, mentoring new programmers and assisting computer science students with coursework and projects.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div className="terminal-text-bright">General Staff & IT</div>
                  <div className="terminal-text-dim text-xs">2020 - 2024</div>
                </div>
                <div className="terminal-text-dim text-sm mb-2">Amity's Designs</div>
                <ul className="text-sm space-y-1 list-disc ml-4">
                  <li>Did Routine Maintenance on all company computers, making sure they were all working an up to date, as well as any general trouble shooting or fixing needed</li>
                  <li>Maintained and opperated all company machines, making sure they were operating properly</li>
                  <li>Worked as general IT setting up companies Wifi networks and routers and range extenders</li>
                  <li>Worked as general staff and cashier when needed, working with customers as well as with inventory</li>
                  <li>Created the system the store uses for maintaining inventory of all previous and future large inventory restocks</li>
                  <li>Managed the companies social media page and promotional material</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="terminal-text-bright mb-2">EDUCATION</div>
            <div className="ml-4">
              <div className="flex justify-between items-start mb-1">
                <div>Certification in Cybersecurity and Pentesting</div>
                <div className="terminal-text-dim text-xs">2025</div>
              </div>
              <div className="terminal-text-dim text-sm">Holberton Coding School</div>
            </div>
            <br />
            <div className="ml-4">
              <div className="flex justify-between items-start mb-1">
                <div>Certification Computer Science</div>
                <div className="terminal-text-dim text-xs">2024 - 2025</div>
              </div>
              <div className="terminal-text-dim text-sm">Holberton Coding School</div>
            </div>
            <br />
            <div className="ml-4">
              <div className="flex justify-between items-start mb-1">
                <div>Studies in BioMedicine</div>
                <div className="terminal-text-dim text-xs">2022 - 2024</div>
              </div>
              <div className="terminal-text-dim text-sm">University of Puerto Rico</div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="terminal-link"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="terminal-screen border border-border max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="terminal-text-bright">Select Resume Type</AlertDialogTitle>
                  <AlertDialogDescription className="terminal-text">
                    Which resume would you like to download?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
                  <AlertDialogCancel className="terminal-text">Cancel</AlertDialogCancel>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <AlertDialogAction 
                      onClick={() => handleDownloadResume('cybersecurity')}
                      className="terminal-text text-sm"
                    >
                      Cybersecurity
                    </AlertDialogAction>
                    <AlertDialogAction 
                      onClick={() => handleDownloadResume('software-dev')}
                      className="terminal-text text-sm"
                    >
                      Software Dev
                    </AlertDialogAction>
                  </div>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Section
export const ContactSection = () => <div className="space-y-4 animate-slide-up">
    <div className="command-prompt">$ cat /contact/info.txt</div>
    <div className="terminal-text">
      <div className="space-y-6">
        <div>
          <div className="terminal-text-bright text-lg mb-4">Get In Touch</div>
          <div className="text-sm mb-6">
            I'm always interested in new opportunities,whether it's to collaborate, talk about a buisness opportunity,
            or just to chat about tech, feel free to reach out, recruiters especially :)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="terminal-text-bright mb-2">Direct Contact</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:your.email@example.com" className="terminal-link">
                  luissoto7710@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                📱 (939) 349-2373
              </div>
              <div className="flex items-center gap-2">
                📍 Aguadilla, Puerto Rico
              </div>
            </div>
          </div>

          <div>
            <div className="terminal-text-bright mb-2">Social & Professional</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/LS7710" className="terminal-link">
                  github.com/LS7710
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/luis-soto-4577252bb/" className="terminal-link">
                  linkedin.com/in/luis-soto-4577353bb
                </a>
              </div>
              <div className="flex items-center gap-2">
                {/* 🌐 <a href="https://yourwebsite.dev" className="terminal-link">
                  yourwebsite.dev
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 border border-border rounded">
          <div className="terminal-text-bright mb-2">Quick Contact Form</div>
          <div className="terminal-text-dim text-sm">
            Want to send a quick message? You can click on the "Send Email button below or just use the command:
          </div>
          <div className="mt-2 font-mono text-sm">
            <span className="terminal-text-bright">$ send-message --to=me --subject="Hello"</span>
          </div>
          <div className="mt-2 text-xs terminal-text-dim space-y-1">
            <div>• This opens your default email client with pre-filled information</div>
            <div>• Customize with: <span className="font-mono">send-message --subject="Your Subject" --message="Your message"</span></div>
            <div>• Try it now! Just copy and paste the command above into the terminal</div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button 
            variant="outline" 
            size="sm" 
            className="terminal-link"
            onClick={() => window.open('mailto:luissoto7710@gmail.com', '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="terminal-link"
            onClick={() => window.open('https://github.com/LS7710', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View GitHub
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="terminal-link"
            onClick={() => window.open('https://www.linkedin.com/in/luis-soto-4577252bb/', '_blank')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  </div>;

// Help Section
export const HelpSection = () => <div className="space-y-4 animate-slide-up">
    <div className="command-prompt">$ man portfolio</div>
    <div className="terminal-text">
      <div className="space-y-4">
        <div>
          <div className="terminal-text-bright text-lg mb-2">Portfolio Terminal - Help Manual</div>
          <div className="text-sm terminal-text-dim mb-4">
            Welcome to the interactive portfolio terminal! This interface mimics classic 
            Unix terminal commands for navigating my professional information.
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">AVAILABLE COMMANDS:</div>
          <div className="space-y-2 text-sm ml-4 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div><span className="terminal-text-bright">/about</span> - About me</div>
                <div><span className="terminal-text-bright">/skills</span> - Technical skills</div>
                <div><span className="terminal-text-bright">/projects</span> - View projects</div>
                <div><span className="terminal-text-bright">/resume</span> - Professional experience</div>
              </div>
              <div>
                <div><span className="terminal-text-bright">/contact</span> - Contact information</div>
                <div><span className="terminal-text-bright">/download</span> - Download resume PDF</div>
                <div><span className="terminal-text-bright">clear</span> - Clear the screen</div>
                <div><span className="terminal-text-bright">help</span> - Show this help</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="terminal-text-bright mb-2">NAVIGATION TIPS:</div>
          <ul className="text-sm space-y-1 list-disc ml-6">
            <li>Use the quick command buttons below for easy navigation</li>
            <li>Press ↑/↓ arrow keys to navigate command history</li>
            <li>All commands are case-insensitive</li>
            <li>You can type partial commands and they'll still work</li>
            <li>The terminal supports both / and standard Unix commands</li>
          </ul>
        </div>

        <div className="mt-4 p-3 border border-border rounded">
          <div className="terminal-text-bright mb-2">Easter Eggs & Fun Commands:</div>
          <div className="text-sm space-y-1">
            <div>Try typing: <span className="font-mono terminal-text-bright">ls</span>, <span className="font-mono terminal-text-bright">date</span>, <span className="font-mono terminal-text-bright">uname</span></div>
            <div>For fun: <span className="font-mono terminal-text-bright">holby</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>;