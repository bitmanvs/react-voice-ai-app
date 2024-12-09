import React from 'react';

interface Note {
    id: string;
    title: string;
    content: string;
    tags: string[];
    created: number;
    lastEdited: number;
}

interface Props {
    notes: Note[];
    selectedNoteId: string | null;
    onSelectNote: (id: string) => void;
    onDeleteNote: (id: string) => void;
    onCreateNote: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onExportNotes: () => void;
    onImportNotes: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
};

const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const NoteList: React.FC<Props> = ({
    notes,
    selectedNoteId,
    onSelectNote,
    onDeleteNote,
    onCreateNote,
    searchQuery,
    onSearchChange,
    onExportNotes,
    onImportNotes
}) => {
    return (
        <div className="flex flex-col h-full">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={onCreateNote}
                className="w-full mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
                Create New Note
            </button>

            <div className="flex-grow overflow-y-auto mb-4">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className={`p-3 mb-2 rounded-md cursor-pointer transition-colors ${
                            selectedNoteId === note.id
                                ? 'bg-blue-100 hover:bg-blue-200'
                                : 'hover:bg-gray-100'
                        }`}
                        onClick={() => onSelectNote(note.id)}
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="font-medium">{note.title}</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteNote(note.id);
                                }}
                                className="text-red-500 hover:text-red-700"
                            >
                                ×
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {stripHtml(note.content)}
                        </p>
                        {note.tags && note.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                                {note.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="text-xs text-gray-500 mt-2">
                            Last edited: {formatDate(note.lastEdited)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <button
                    onClick={onExportNotes}
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                    Export Notes
                </button>
                <label className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer transition-colors text-center">
                    Import Notes
                    <input
                        type="file"
                        accept=".json"
                        onChange={onImportNotes}
                        className="hidden"
                    />
                </label>
            </div>
        </div>
    );
};

export default NoteList;
