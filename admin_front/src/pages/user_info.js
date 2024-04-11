import Home from '@src/biz/userInfo'
import createServerProps from '@src/createServerProps';
import Store from '@src/biz/userInfo/store'

export default Home;
const getServerSideProps = createServerProps(Store);
export {getServerSideProps};