
const Avatar = ({ name, size = 6 }: {name: string, size?: number}) => {
  return (
    <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-200 rounded-full`}>
        <span className="font-medium text-gray-600">{name[0].toUpperCase()}</span>
    </div>
  )
}

export default Avatar