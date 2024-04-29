import React from 'react'

export default function ErrorForm({msg}) {
    return (
        <div>
            <span className="text-red-500 ml-2 text-sm">{msg}</span>
        </div>
    )
}