import Header from 'src/components/Shared/Header';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      {/* Other layout content */}
      <Header title={'Project 41'} />
      <div style={{ height: '90%' }}>{children}</div>
    </div>
  );
};

export default Layout;
