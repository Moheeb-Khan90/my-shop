
import { fetchSingleProduct } from '../../Store/singleProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { STATUS } from '../../Store/ProductSlice'
import { useParams } from 'react-router-dom'
import SingleProductCom from '../../Components/SingleProduct/SingleProductCom'
import automaticScrollUp from '../../Utils/ScrollUp'

const SingleProduct = () => {
    automaticScrollUp();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.singleProduct);
    // console.log(data)

    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [id, dispatch])

    if (status === STATUS.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div>
            <SingleProductCom SingleProduct={data} status={status} />
        </div>
    )
}

export default SingleProduct