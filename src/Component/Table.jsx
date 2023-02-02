import React from 'react'

export default function Table(dataTable) {

    {dataTable?.dataTable?.data?.data.map((item) =>
            console.log())};
    return (
        <>
            <div className='' ></div>
            <table >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Day Install</th>
                        <th>Platform</th>
                        <th>Day Uninstalls</th>
                        <th>Platform</th>
                        <th>Churn Rate</th>
                        <th>Churn Platform</th>
                    </tr>

                </thead>
                <tbody>
                    {dataTable?.dataTable?.data?.data.map((item) => (
                        <tr>
                            <td>{item.created_At}</td>
                            <td>{item.totalinstall}</td>
                            <td><i className="bi bi-android2"></i>{item.android_install}<br />
                                <i className="bi bi-apple"></i> {item.ios_install}</td>
                            <td>{item.totaluninstall}</td>
                            <td><i className="bi bi-android2"></i>{item.android_uninstall}<br />
                                <i className="bi bi-apple"></i> {item.ios_uninstall}</td>
                            <td>{item.totalchurn}</td>
                            <td><i className="bi bi-apple"></i>  {item.ios_churn}<br />
                                <i className="bi bi-android2"></i>   {item.android_churn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}


