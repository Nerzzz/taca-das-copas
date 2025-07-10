import React from 'react'

function TableTop() {
    return (
        <table id='tabelaPontos' className='z-[1] shadow grow-[2]'>
            <tbody>
                <tr className='table_header'>
                    <th>Posição</th>
                    <th>Turmas competindo</th>
                    <th>Pontuação</th>
                </tr>
                <tr>
                    <td>0º</td>
                    <td>3º Desenvolvimento de Sistemas</td>
                    <td>0 pontos</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableTop