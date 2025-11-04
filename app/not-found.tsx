export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-gray px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-8xl font-bold text-primary">404</div>
        <h1 className="text-h2 font-heading text-accent-dark">
          Seite nicht gefunden
        </h1>
        <p className="text-gray-600">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <a href="/" className="btn-primary inline-block">
          Zur Startseite
        </a>
      </div>
    </div>
  );
}
