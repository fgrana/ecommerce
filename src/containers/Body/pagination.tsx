import Pagination from 'react-bootstrap/Pagination';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (<>
    <Pagination>{items}</Pagination>
</>
);

export default function Body(){ return paginationBasic;}