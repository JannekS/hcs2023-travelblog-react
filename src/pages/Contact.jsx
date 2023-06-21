import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto min-h-screen p-4 md:px-8 md:pb-8 bg-amber-50 rounded-b-md shadow-md prose">
      <h1 className="font-bold font-title text-4xl text-center ">
        Contact / About
      </h1>

      <h3>About</h3>

      <p>Hi, I'm Jannek :-)</p>
      <p>
        I created this travel blog as the final project of the Full-Stack
        Program of the{" "}
        <a
          className="underline underline-offset-4 decoration-2 decoration-cyan-700/70 hover:decoration-4 hover:underline-offset-2"
          href="https://hamburgcodingschool.com/en/"
        >
          Hamburg Coding School
        </a>
        . The frontend is written in react and styled with tailwindcss, the
        backend is provided with{" "}
        <a
          className="underline underline-offset-4 decoration-2 decoration-cyan-700/70 hover:decoration-4 hover:underline-offset-2"
          href="https://supabase.com/"
        >
          supabase
        </a>
        .
      </p>
      <h3>Contact</h3>
      <p>
        If you have any questions about the project or the Full-Stack Program it
        was part of, please contact the{" "}
        <a
          className="underline underline-offset-4 decoration-2 decoration-cyan-700/70 hover:decoration-4 hover:underline-offset-2"
          href="https://hamburgcodingschool.com/en/contact/"
        >
          Hamburg Coding School
        </a>
        .
      </p>
      <div className="flex gap-2 items-center mb-2">
        <PhoneIcon className="w-5 h-5" /> <span>+49 40 22863615</span>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <EnvelopeIcon className="w-5 h-5" />{" "}
        <span>teresa@hamburgcodingschool.com</span>
      </div>
    </div>
  );
}

export default Contact;
