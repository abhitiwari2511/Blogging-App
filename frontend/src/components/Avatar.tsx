const Avatar = ({ name }: {name: string}) => {
  const initials = name ? name.trim().charAt(0).toUpperCase() : '?';
  return (
    <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full`}>
        <span className="font-medium text-gray-600">{initials}</span>
    </div>
  )
}
export default Avatar;