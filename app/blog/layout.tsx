export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    
    return (
        <div className='bg-slate-900 text-white max-w-3xl mx-auto py-20 px-4 '>
            {children}
        </div>
    )
  }