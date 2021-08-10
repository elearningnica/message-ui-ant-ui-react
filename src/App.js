import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { message, Button, Tabs  } from 'antd';

const { TabPane } = Tabs;

function App() {

  const success = () => {
    message
      .loading('Loading..', 2.5)
      .then(() => message.success('Success', 2.5))
      .then(() => message.info('Data saved', 2.5));
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const info = () => {
    message.info('This is a normal message');
  };


  return (
    <>
      <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        <Button type="primary" onClick={info}>Display normal message</Button>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <Button type="default" onClick={success}>Success</Button>
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <Button type="danger" onClick={error}>Error</Button>
      </TabPane>
      <TabPane tab="Tab 4" key="4">
        <Button type="dashed" onClick={warning}>Warning</Button>
      </TabPane>
    </Tabs>

    </>
  );
}

export default App;
