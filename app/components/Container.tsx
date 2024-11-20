import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col gap-8 p-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
    </div>
  );
} 