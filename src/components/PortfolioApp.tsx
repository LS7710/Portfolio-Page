import React, { useState } from 'react';
import Terminal from './Terminal';
import StartupAnimation from './StartupAnimation';
import { 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ResumeSection, 
  ContactSection, 
  HelpSection 
} from './PortfolioSections';

const PortfolioApp: React.FC = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [currentSection, setCurrentSection] = useState('welcome');

  const getWelcomeMessage = () => (
    <div className="space-y-4 animate-fade-in">
      <div className="terminal-text-bright text-xl mb-4">
        Welcome to My Digital Portfolio
      </div>
      
      <div className="ascii-art text-[0.5rem] sm:text-xs md:text-sm mb-6 overflow-x-auto">
{`    ┌───────────────────────────────────────────────────────────────────────────┐
    │                                                                           │
    │    ██╗     ██╗   ██╗██╗███████╗    ███████╗ ██████╗ ████████╗ ██████╗     │
    │    ██║     ██║   ██║██║██╔════╝    ██╔════╝██╔═══██╗╚══██╔══╝██╔═══██╗    │
    │    ██║     ██║   ██║██║███████╗    ███████╗██║   ██║   ██║   ██║   ██║    │
    │    ██║     ██║   ██║██║╚════██║    ╚════██║██║   ██║   ██║   ██║   ██║    │
    │    ███████╗╚██████╔╝██║███████║    ███████║╚██████╔╝   ██║   ╚██████╔╝    │
    │    ╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚══════╝ ╚═════╝    ╚═╝    ╚═════╝     │
    │                                                                           │
    │                P O R T F O L I O   S Y S T E M   v 2 . 1                  │
    └───────────────────────────────────────────────────────────────────────────┘`}
      </div>

      <div className="terminal-text">
        <div className="mb-4">
          System initialized successfully. Welcome to my interactive portfolio terminal!
        </div>
        
        <div className="mb-4 text-sm">
          This retro style terminal interface lets you explore my professional background, 
          technical skills, and projects using Linux terminal commands.
        </div>

        <div className="border border-border rounded p-4 mb-4">
          <div className="terminal-text-bright mb-2">Quick Start Guide:</div>
          <div className="text-sm space-y-1">
            <div>• Type <span className="font-mono terminal-text-bright">/about</span> to learn about me</div>
            <div>• Use <span className="font-mono terminal-text-bright">/projects</span> to see my work</div>
            <div>• Try <span className="font-mono terminal-text-bright">/resume</span> for professional experience</div>
            <div>• Type <span className="font-mono terminal-text-bright">help</span> for all available commands</div>
          </div>
        </div>

        <div className="terminal-text-dim text-sm">
          💡 Tip: Use the quick command buttons below or type commands manually. 
          Arrow keys navigate through command history.
        </div>
      </div>
    </div>
  );

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Handle send-message command with parameters
    if (cmd.startsWith('send-message')) {
      handleSendMessage(command);
      return;
    }
    
    // Handle various command formats
    switch (cmd) {
      case '/about':
      case 'about':
      case 'cat /about':
        setCurrentSection('about');
        break;
      case '/skills':
      case 'skills':
      case 'ls /skills':
        setCurrentSection('skills');
        break;
      case '/projects':
      case 'projects':
      case 'ls /projects':
        setCurrentSection('projects');
        break;
      case '/resume':
      case 'resume':
      case 'cat /resume':
        setCurrentSection('resume');
        break;
      case '/contact':
      case 'contact':
      case 'cat /contact':
        setCurrentSection('contact');
        break;
      case '/download':
      case 'download':
      case 'wget resume.pdf':
        // Trigger resume download
        handleDownloadResume();
        break;
      case 'clear':
      case 'cls':
        setCurrentSection('welcome');
        break;
      case 'help':
      case 'man':
      case '--help':
        setCurrentSection('help');
        break;
      // Easter eggs
      case 'whoami':
        setCurrentSection('whoami');
        break;
      case 'date':
        setCurrentSection('date');
        break;
      case 'uname':
      case 'uname -a':
        setCurrentSection('uname');
        break;
      case 'holby':
        setCurrentSection('holby');
        break;
      case 'ls':
      case 'ls /':
        setCurrentSection('ls');
        break;
      default:
        setCurrentSection('unknown');
        break;
    }
  };

  const handleDownloadResume = () => {
    // Trigger actual PDF download
    const resumeUrl = '/resume.pdf'; // Path to your resume file in the public folder
    
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Luis_Soto_Resume.pdf'; // The filename that will be downloaded
      link.target = '_blank'; // Open in new tab as fallback
      
      // Append to document, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show download confirmation in terminal
      setCurrentSection('download');
    } catch (error) {
      console.error('Download failed:', error);
      // Still show the download section even if there's an error
      setCurrentSection('download');
    }
  };

  const handleSendMessage = (command: string) => {
    // Parse the command for parameters
    const subjectMatch = command.match(/--subject="([^"]*)"/) || command.match(/--subject=(\S+)/);
    const messageMatch = command.match(/--message="([^"]*)"/) || command.match(/--message=(\S+)/);
    
    const subject = subjectMatch ? subjectMatch[1] : 'Hello from Portfolio Terminal';
    const message = messageMatch ? messageMatch[1] : 'Hi Luis,\n\nI found your portfolio and wanted to reach out!\n\nBest regards';
    
    // Create mailto URL with parameters
    const mailtoUrl = `mailto:luissoto7710@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Open email client
    window.open(mailtoUrl, '_blank');
    
    // Show confirmation in terminal
    setCurrentSection('send-message-success');
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      case 'help':
        return <HelpSection />;
      case 'whoami':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ whoami</div>
            <div className="terminal-text">
              guest@portfolio:~$ you are viewing the Luis' Portfolio<br/>
              Role: Software Developer & Cybersecurity Analyst<br/>
              Status: Available for new opportunities<br/>
              Interests: Developing Software using lower level languages like C or C++, <br />
              Cybersecurity, and Reverse Engineering
            </div>
          </div>
        );
      case 'date':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ date</div>
            <div className="terminal-text">
              {new Date().toUTCString()}<br/>
              Portfolio last updated: January 2025
            </div>
          </div>
        );
      case 'uname':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ uname -a</div>
            <div className="terminal-text">
              PortfolioOS 2.1.0 Terminal x86_64 React TypeScript GNU/Linux<br/>
              Built with: React + TypeScript + Tailwind CSS<br/>
              Hosted on: hopefully Vercel
            </div>
          </div>
        );
      case 'holby':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ holby</div>
            <div className="terminal-text ascii-art">
              <div className="animate-glow-pulse">
{`                                               :-========-:.                                                
                                              .==============:                                              
                                              .================.                                            
                                              :=================                                            
                                             .===================                                           
                                             ====================                                           
                                           .===-.-===============                                           
                                         .-=====-================                                           
                                       :=========================                                           
                                    -============-::-============                                           
                                    .-=====-::       :===========                                           
                                        .            :===========                                           
                                                   .-============                                           
                                                 .-==============                                           
                                               .=================                                           
                                              -==================                                           
                                            .====================                                           
                                           :=====================                                           
                                          :======================                                           
                                          =======================                                           
                                         :======================:                                           
                                         :======================-=======:                                   
                                         :==============================.                                   
                                          =============================:                                    
                                          .===========================.                                     
                                           .========================:                                       
                                            .====================.                                          
                                              :=================                                            
                                                :================.                                          
                                                  .===============                                          
                                                     ==============                                         
                                                       ============                                         
                                                       .===========                                         
                                                        .==========                                         
                                            .====.      .==========                                         
                                           =======-     .=========                                          
                                          =========:    .========.                                          
                                          =========.   .========                                            
                                           ======:   .========:                                             
                                            -===============:                                               
                                              .=========:                                                   
`}
              </div>
            </div>
          </div>
        );
      case 'ls':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ ls -la /</div>
            <div className="terminal-text font-mono text-sm">
              drwxr-xr-x  8 guest guest  256 Jan  9 2025 .<br/>
              drwxr-xr-x  8 guest guest  256 Jan  9 2025 ..<br/>
              drwxr-xr-x  2 guest guest   64 Jan  9 2025 about/<br/>
              drwxr-xr-x  2 guest guest   64 Jan  9 2025 contact/<br/>
              drwxr-xr-x  2 guest guest   64 Jan  9 2025 projects/<br/>
              drwxr-xr-x  2 guest guest   64 Jan  9 2025 resume/<br/>
              drwxr-xr-x  2 guest guest   64 Jan  9 2025 skills/<br/>
              -rw-r--r--  1 guest guest 1024 Jan  9 2025 portfolio.config<br/>
              -rwxr-xr-x  1 guest guest 2048 Jan  9 2025 download_resume.sh
            </div>
          </div>
        );
      case 'download':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ wget resume.pdf</div>
            <div className="terminal-text">
              <div className="mb-2">Connecting to resume-server...</div>
              <div className="mb-2">HTTP request sent, awaiting response... 200 OK</div>
              <div className="mb-2">Length: 245,760 (240K) [application/pdf]</div>
              <div className="mb-4">Saving to: 'Luis_Soto_Resume.pdf'</div>
              <div className="terminal-text-bright mb-4">Download complete!</div>
              <div className="text-sm terminal-text-dim">
                Your resume PDF download has been initiated. Check your downloads folder for 'Luis_Soto_Resume.pdf'.
                You can also use the download button in the /resume section.
              </div>
            </div>
          </div>
        );
      case 'send-message-success':
        return (
          <div className="animate-slide-up">
            <div className="command-prompt">$ send-message --to=me --subject="Hello"</div>
            <div className="terminal-text">
              <div className="mb-2">📧 Opening email client...</div>
              <div className="mb-2">✅ Email composition window launched</div>
              <div className="mb-4 terminal-text-bright">Message ready to send!</div>
              <div className="text-sm terminal-text-dim space-y-1">
                <div>• Your default email client should have opened</div>
                <div>• Pre-filled with my email address</div>
                <div>• Subject and message template included</div>
                <div>• Just hit send when you're ready!</div>
              </div>
              <div className="mt-4 p-3 border border-border rounded">
                <div className="terminal-text-bright mb-2">Pro Tips:</div>
                <div className="text-xs space-y-1">
                  <div>• Use <span className="font-mono">send-message --subject="Your Subject"</span> for custom subject</div>
                  <div>• Add <span className="font-mono">--message="Your message"</span> for custom body text</div>
                  <div>• Example: <span className="font-mono">send-message --subject="Job Opportunity" --message="Hi Luis, I have a position you might be interested in..."</span></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'unknown':
        return (
          <div className="animate-slide-up">
            <div className="terminal-text">
              <div className="mb-2">bash: command not found</div>
              <div className="text-sm terminal-text-dim">
                Try typing <span className="font-mono terminal-text-bright">'help'</span> to see available commands,
                or use the quick command buttons below.
              </div>
            </div>
          </div>
        );
      default:
        return getWelcomeMessage();
    }
  };

  if (showStartup) {
    return <StartupAnimation onComplete={() => setShowStartup(false)} />;
  }

  return (
    <div className="h-screen terminal-screen">
      <Terminal 
        onCommand={handleCommand}
        currentSection={renderCurrentSection()}
      />
    </div>
  );
};

export default PortfolioApp;