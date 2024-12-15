import Avatar from "./Avatar"

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <div>
            Blogging App
        </div>
        <div>
            <Avatar size={8} name="Abhishek Tiwari"/> 
        </div>
    </div>
  )
}

export default Appbar