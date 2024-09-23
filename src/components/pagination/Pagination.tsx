type props = {
    page:string
    maxPage:string
}

export function Pagination(props:any){
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                 {props.page>0 ? 
                 <><li className="page-item"><a className="page-link" href="#">Previous</a></li>
                 <li className="page-item"><a className="page-link" href="#"></a></li></>
                    :<></>}
                <li className="page-item"><a className="page-link" href="#">{props.page}</a></li>
                <li className="page-item"><a className="page-link" href="#">{props.page+1}</a></li>
                {props.page===props.maxPage? <></>
                    :<li className="page-item"><a className="page-link" href="#">Next</a></li>}
            </ul>
        </nav>
    );
}
