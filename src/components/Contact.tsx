import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>

      <div className="flex justify-center gap-8">

        <a
          href="https://github.com/TassKiaa"
          target="_blank"
          className="bg-forest text-bone p-4 rounded-xl hover:scale-110 transition"
        >
          <Github size={26} />
        </a>

        <a
          href="https://www.linkedin.com/in/taskiakhanam/"
          target="_blank"
          className="bg-forest text-bone p-4 rounded-xl hover:scale-110 transition"
        >
          <Linkedin size={26} />
        </a>

        <a
          href="mailto:taskiakhanam2@gmail.com"
          className="bg-forest text-bone p-4 rounded-xl hover:scale-110 transition"
        >
          <Mail size={26} />
        </a>

      </div>
    </section>
  );
}