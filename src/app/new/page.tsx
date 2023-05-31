export default function Page() {
  return (
    <>
      <header
        className="flex
        justify-between
        mb-4
        items-center">
        <h1 className="text-2xl">New</h1>
        <form className="flex gap-2 flex-col">
          <input type="text" name="title" className="border border-slate-300
        text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700
        outline-none"/>
        </form>
      </header>
    </>
  )
}