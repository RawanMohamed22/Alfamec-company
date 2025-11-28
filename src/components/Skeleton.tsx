const Skeleton = () => {
    return (
        <div className="w-full space-y-6">
        <div className="h-64 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-32 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
            <div className="h-32 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
            <div className="h-32 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
        </div>
        <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-1/2"></div>
        </div>
    </div>
    )
}

export default Skeleton