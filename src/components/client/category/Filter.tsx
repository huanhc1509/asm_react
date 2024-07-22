
const Filter = () => {
    return (
        <form className="max-w-sm flex w-full gap-4">
            <div className="flex items-center gap-4">
                <label htmlFor="sort" className="block text-sm font-medium text-gray-900  whitespace-nowrap">Sort
                    By:</label>
                <select id="sort" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div className="flex items-center gap-4">
                <label htmlFor="show" className="block text-sm font-medium text-gray-900  whitespace-nowrap">Show:</label>
                <select id="show" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
        </form>

    )
}

export default Filter