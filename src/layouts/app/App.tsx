import { Layout, Menu, MenuProps } from 'antd';
import { ReactNode } from 'react';
import HeaderNav from './HeaderNav.tsx';
const { Content } = Layout;

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const items: MenuProps['items'] = [
    {
      label: 'Billing',
      key: 'billing',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      key: 'need-help',
      label: <>Need help</>,
    },
  ];

  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        {/* <SideNav
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        /> */}
        <Layout>
          <HeaderNav className="sticky top-0 flex justify-between gap-8 z-50 items-center py-8 transition-all px-4 shadow-slate-50 bg-white h-[85px]">
            <div className="flex items-center gap-10">
              <img
                src="../../../public/images/svg/logo.svg"
                className="size-8"
              />
              <div>
                <Menu
                  // onClick={onClick}
                  // selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                />
              </div>
            </div>
          </HeaderNav>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
