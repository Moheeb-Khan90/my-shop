

import { fetchSingleProduct} from '../../Store/singleProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { STATUS } from '../../Store/ProductSlice'
import { useParams } from 'react-router-dom'
import SingleProductCom from '../../Components/SingleProduct/SingleProductCom'

const SingleProduct = () => {
    const {id}=useParams()
    const dispatch = useDispatch()
    const { data, status } = useSelector((state) => state.singleProduct)
    // console.log(data)

    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [id,dispatch])

    if (status === STATUS.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUS.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div>
            <SingleProductCom SingleProduct={data}/>
        </div>
    )
}

export default SingleProduct