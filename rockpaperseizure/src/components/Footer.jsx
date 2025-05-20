export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 text-center border-t border-white/10">
      <div className="text-xl mb-4">Get in touch 👋</div>

      <div className="space-y-2">
        <p>
          Email:{" "}
          <a href="mailto:your@email.com" className="underline">
            your@email.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/kanish76"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/kanish76
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @yourhandle
          </a>
        </p>
      </div>

      <div className="mt-8 text-xs opacity-50">
        &copy; {new Date().getFullYear()} rockpaperseizure
      </div>
    </footer>
  );
}

