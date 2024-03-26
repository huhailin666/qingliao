import about from '../biz/about'
// export default about;

export default (props)=>{
    // class 
}

// 此函数在构建时被调用
export async function getServerSideProps() {

    const posts = [{ title: "xzcxzc" }]

    return {
        props: {
            posts,
        },
    }
}

