
import MenuItem from './MenuItem'

function MenuList({list = []}) {

   

  return (
    <ul className='mt-0 mb-0 ml-2'>
{
    list && list.length ?
    list.map((menuItem) => <MenuItem item={menuItem}/>)
    : null
}
    </ul>
  )
}

export default MenuList