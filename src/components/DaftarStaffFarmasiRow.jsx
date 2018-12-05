import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStaffFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaffFarmasi.map(staffFarmasi => {
                return (
                    <tr key={staffFarmasi.id}>
                        <td>{staffFarmasi.nama}</td>
                        <td>{staffFarmasi.jenis === 0 ? 'Staff Farmasi' : 'Staff'}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}