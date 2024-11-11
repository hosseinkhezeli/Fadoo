export function Container({
  children,
  id,
}: Readonly<{
  children: React.ReactNode;
  id: string;
}>) {
  return (
    <div className="min-w-screen h-screen border relative" id={id}>
      <div className="w-screen h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
