import Home from '@src/biz/speak'
import createServerProps from '@src/createServerProps';
import Store from '@src/biz/speak/store'

export default Home;
const getServerSideProps = createServerProps(Store);
export {getServerSideProps};