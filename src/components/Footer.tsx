export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-primary/10 text-center">
      <div className="space-y-4">
        {/* Simple Brand Name */}
        <p className="text-sm font-bold tracking-widest text-accent">
          T.<span className="text-primary">KHANAM</span>
        </p>
        
        {/* Copyright Text */}
        <p className="text-xs text-accent/40">
          &copy; {currentYear} Taskia Khanam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}