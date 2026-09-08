export const navigateToSection = (sectionId) => {
  if (typeof document === 'undefined') return false;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${sectionId}`);
    }
    return true;
  }
  return false;
};

export const normalizeCommand = (input) => {
  if (!input) return '';
  let cleaned = input.trim().toLowerCase();
  // Remove common terminal navigation prefixes
  cleaned = cleaned.replace(/^(cd|goto|view|open|run)\s+/, '').trim();
  return cleaned;
};

export const processCommand = (rawInput, socialLinks = {}, triggerConfetti = () => {}) => {
  const normalized = normalizeCommand(rawInput);
  if (!normalized) return { type: 'none' };

  if (normalized === 'clear') {
    return { type: 'clear' };
  }

  // Navigation commands & aliases
  switch (normalized) {
    case 'home':
    case 'top':
    case 'main':
      navigateToSection('home');
      return { type: 'nav', section: 'home', output: '🏠 Navigating to #home...' };

    case 'about':
    case 'me':
      navigateToSection('about');
      return { type: 'nav', section: 'about', output: '👤 Navigating to #about section...' };

    case 'skills':
    case 'skill':
    case 'stack':
    case 'tech':
      navigateToSection('skills');
      return { type: 'nav', section: 'skills', output: '⚡ Navigating to #skills & tech ecosystem...' };

    case 'projects':
    case 'project':
    case 'work':
      navigateToSection('projects');
      return { type: 'nav', section: 'projects', output: '🚀 Navigating to #projects section...' };

    case 'experience':
    case 'exp':
    case 'internship':
      navigateToSection('experience');
      return { type: 'nav', section: 'experience', output: '💼 Navigating to #experience timeline...' };

    case 'education':
    case 'edu':
    case 'college':
      navigateToSection('education');
      return { type: 'nav', section: 'education', output: '🎓 Navigating to #education section...' };

    case 'journey':
    case 'roadmap':
      navigateToSection('journey');
      return { type: 'nav', section: 'journey', output: '🧭 Navigating to #journey learning roadmap...' };

    case 'contact':
    case 'email':
    case 'message':
      navigateToSection('contact');
      return { type: 'nav', section: 'contact', output: '📬 Navigating to #contact section...' };

    // External link commands
    case 'resume':
      if (typeof window !== 'undefined') window.open(socialLinks.resume || '/resume.pdf', '_blank');
      return { type: 'link', output: '📄 Opening resume.pdf...' };

    case 'github':
      if (typeof window !== 'undefined' && socialLinks.github) window.open(socialLinks.github, '_blank');
      return { type: 'link', output: '🐙 Opening GitHub profile...' };

    case 'linkedin':
      const liUrl = socialLinks.linkedin || socialLinks.linkedIn;
      if (typeof window !== 'undefined' && liUrl) window.open(liUrl, '_blank');
      return { type: 'link', output: '💼 Opening LinkedIn profile...' };

    case 'instagram':
      if (typeof window !== 'undefined' && socialLinks.instagram) window.open(socialLinks.instagram, '_blank');
      return { type: 'link', output: '📸 Opening Instagram profile...' };

    case 'twitter':
    case 'x':
      if (typeof window !== 'undefined' && socialLinks.twitter) window.open(socialLinks.twitter, '_blank');
      return { type: 'link', output: '🐦 Opening Twitter/X profile...' };

    // Special & Info commands
    case 'whoami':
      return { type: 'info', output: 'ajuruddin-ali (B.Tech IT Final Year @ REC Mirzapur)' };

    case 'role':
      return { type: 'info', output: 'Full-Stack Developer | React & Node.js Specialist | B.Tech IT' };

    case 'focus':
      return { type: 'info', output: 'Frontend → Backend → Databases → REST APIs → Cloud Deployment' };

    case 'status':
      return {
        type: 'info',
        output: 'SYSTEM STATUS\n--------------\nOS: Ubuntu Linux\nFocus: Full-Stack Web Development\nTech Stack: React, Node.js, Express, MongoDB/SQL\nStatus: Building scalable web applications...'
      };

    case 'sudo hire ajuruddin':
    case 'hire':
      triggerConfetti();
      return { type: 'special', output: "[sudo] permission granted. Let's build full-stack apps together! 🚀" };

    case 'npm run future':
      return { type: 'info', output: 'Building... Full-Stack Developer → Senior Software Engineer → Tech Lead' };

    case 'ls':
    case 'dir':
      return { type: 'info', output: 'about/   skills/   projects/   journey/   experience/   education/   contact/   resume.pdf' };

    case 'help':
      return {
        type: 'help',
        output: `Available commands:\n\nhome        → Go to homepage\nabout       → About me\nskills      → Tech stack & tools\nprojects    → My projects\nexperience  → Experience\neducation   → Education\njourney     → Learning journey\ncontact     → Contact me\nclear       → Clear terminal\nhelp        → Show available commands`
      };

    default:
      return {
        type: 'unknown',
        output: `command not found: ${rawInput.trim()}\nType "help" to see available commands.`
      };
  }
};
