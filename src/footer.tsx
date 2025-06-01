export default function Footer() {
  return (
    <footer className="text-gray-300 py-8 mt-20 border-t border-zinc-700">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Miguel Frías. All rights reserved.
        </p>
        
        <p className="text-xs text-gray-500">
          Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
