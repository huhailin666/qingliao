import React, {useState} from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import {useRouter} from "next/router";
import useStore from "@src/store/useStore";

const {Header, Content, Footer, Sider} = Layout;

const LeftBar = [
    {key: '/', icon: React.createElement(UserOutlined), label: '用户列表', path: '/'},
    {key: '/speak', icon: React.createElement(UserOutlined), label: '说说列表', path: '/speak'},
    {key: '/user_info', icon: React.createElement(UserOutlined), label: '用户信息', path: '/user_info'},
]

const App: React.FC = ({children}) => {
    const router = useRouter();
    const [activeKey, setActiveKey] = useState(children.props.path)
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const handleMenuChange = ({item, key, keyPath, domEvent}) => {
        setActiveKey(key);
        for (let i = 0; i < LeftBar.length; i++) {
            if (LeftBar[i].key === key) {
                router.push(LeftBar[i].path)
                // window.location.href = LeftBar[i].path;
            }
        }
    }
    return (
        <Layout>
            <Sider
                style={{paddingTop: '40px'}}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical"/>
                <Menu selectedKeys={[activeKey]} onClick={handleMenuChange} theme="dark" mode="inline"
                      defaultSelectedKeys={['user']}
                      items={LeftBar}/>
            </Sider>
            <Layout style={{height: "100vh"}}>
                <Header style={{padding: 0, background: colorBgContainer}}/>
                <Content style={{margin: '24px 16px 0'}}>
                    <div
                        style={{
                            padding: 24,
                            // minHeight: 360,
                            height:'100%',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    轻聊 ©{new Date().getFullYear()} Created by haline
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;