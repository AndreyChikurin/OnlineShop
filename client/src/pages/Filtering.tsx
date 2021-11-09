import { Grid} from '@mui/material';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import MediaCard from '../components/Card'
import { PRODUCT_ROUTE, FILTER_ROUTE } from '../utils/consts';
import ListProducts from 'src/components/ListProducts';
import { Link } from 'src/components/Types/Link';


const Filtering = () => {

    const location = useLocation()
    location.pathname = FILTER_ROUTE

    const link : Link = useParams()

    const history = useHistory()
    return (
            <Grid style={{justifyContent:'center', marginTop:4, marginLeft: 68,marginRight: 68, display:'flex'}}>
                {
                    ListProducts().map(value => 
                        <Grid onClick={() => history.push(PRODUCT_ROUTE + '/' + value.id) } key={value.id}>
                            {value.categoryType.id === link.id ?
                                                                <Grid style={{justifyContent:'center', margin: 8, display:'flex'}} >
                                                                    <MediaCard  {...value} > </MediaCard>
                                                                </Grid>
                                                                :
                                                                null
                            }
 
                        </Grid>   
                    )
                }
            </Grid>
  );
}

export default Filtering;