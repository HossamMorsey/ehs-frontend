export const columns = [
  {
    title: "Event Name",
    dataIndex: "eventName",
    key: "eventName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Key Points",
    dataIndex: "keyPoints",
    key: "keyPoints",
  },
  {
    title: "Theme",
    dataIndex: "theme",
    key: "theme",
  },
  {
    title: "Attendants",
    dataIndex: "attendants",
    key: "attendants",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    key: "action",
    // render: (_, record) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
];

export const data =[
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
]
