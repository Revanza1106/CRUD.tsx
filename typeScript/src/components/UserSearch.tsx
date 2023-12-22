import { FC, useState } from "react"


const UserSearch : FC = () => {
    const [searchItem,setSearchItem] = useState('');
    const handleSearch = (event :React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value)
    };

  return (
    <div>
        <input type="text" name="Search" value={searchItem} placeholder="type something" onChange={handleSearch}/>
        {searchItem && <div>{searchItem}</div>}
    </div>
  )
}

export default UserSearch