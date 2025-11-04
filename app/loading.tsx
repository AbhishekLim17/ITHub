export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-gray">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary rounded-full animate-pulse mx-auto"></div>
        <p className="text-accent-dark font-medium">Lädt...</p>
      </div>
    </div>
  );
}
