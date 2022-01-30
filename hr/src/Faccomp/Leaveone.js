import { Table } from "antd";
import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Leaveone= () => {

  const columns = [
    {
      title: "From",
      dataIndex: "From",
    },
    {
      title: "To",
      dataIndex: "To",
    },
    {
      title: "Leave_Applied_Date",
      dataIndex: "Leave_Applied_Date",
    },
    {
      title: "Leavetype",
      dataIndex: "Leave_Category",
    },
    {
        title: "status",
        dataIndex: "is_Approved",
      },
  ];

  const data = [
    {
      key: "1",
      from: "aaa@example.com",
      to: "zzz.zzz@example.com",
      subject: "[ HR-888 ] Notice of official announcement",
      date: "0:20",
    },
    {
      key: "2",
      from: "bbb.bbbb@example.com",
      to: "yyy.yyy@example.com",
      subject: `[web:333] "Web Contact"`,
      date: "0:20",
    }
  ];

//   const columns = [
//     {
//       title: "From To",
//       render: (record) => (
//         <React.Fragment>
//           {record.from}
//           <br />
//           {record.to}
//         </React.Fragment>
//       ),
//       responsive: ["xs"]
//     },
//     {
//       title: "From",
//       dataIndex: "from",
//       sorter: (a, b) => a.from.length - b.from.length,
//       sortDirections: ["descend", "ascend"],
//       responsive: ["sm"]
//     },
//     {
//       title: "To",
//       dataIndex: "to",
//       sorter: (a, b) => a.to - b.to,
//       sortDirections: ["descend", "ascend"],
//       responsive: ["sm"]
//     },
//     {
//       title: "Subject",
//       dataIndex: "subject",
//       sorter: (a, b) => a.subject.length - b.subject.length,
//       sortDirections: ["descend", "ascend"]
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       sorter: (a, b) => a.date.length - b.date.length,
//       sortDirections: ["descend", "ascend"]
//     }
//   ];


  const isWebDevice = useMediaQuery('(min-width:700px)');
  const deviceColumns = [
      {
        title: "Student Data",
        render: (record, key, index) => {
           const from = record.from;
           const to = record.to;
           const Leave_Applied_Date = record.Leave_Applied_Date;
           const Leave_Category = record.Leave_Category;
           const status = record.is_Approved;
           return (
               <div>
                    <span>
                          <h4>From</h4>
                          <h4>{from}</h4>
                    </span>
                    <span>
                          <h4>To</h4>
                          <h4>{to}</h4>
                    </span>
                    <span>
                          <h4>Leave_Applied_Date</h4>
                          <h4>{Leave_Applied_Date}</h4>
                    </span>
                    <span>
                          <h4>LeaveType</h4>
                          <h4>{Leave_Category}</h4>
                    </span>
                    <span>
                          <h4>status</h4>
                          <h4>{status}</h4>
                    </span>
               </div>
           )
        }
    }
    ];
  

  return (
    //   <Table columns={columns} dataSource={data} pagination={false} />
    <Table 
    columns={isWebDevice ? columns : deviceColumns}
    dataSource={data} 
    pagination={false} 
/>
  );
}
export default Leaveone;