interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isModelLoading: boolean;
    isTranscribing: boolean;
}

export function TranscribeButton(props: Props): JSX.Element {
    const { isModelLoading, isTranscribing, onClick, ...buttonProps } = props;
    return (
        <button
            {...buttonProps}
            onClick={(event) => {
                if (onClick && !isTranscribing && !isModelLoading) {
                    onClick(event);
                }
            }}
            disabled={isTranscribing}
            className='flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg font-semibold flex items-center justify-center gap-3 disabled:bg-blue-400 disabled:cursor-not-allowed'
        >
            {isModelLoading ? (
                <Spinner text={"Loading model..."} />
            ) : isTranscribing ? (
                <Spinner text={"Transcribing..."} />
            ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Transcribe Audio
                </>
            )}
        </button>
    );
}

export function Spinner(props: { text: string }): JSX.Element {
    return (
        <div role='status' className="flex items-center gap-3">
            <svg
                aria-hidden='true'
                role='status'
                className='w-6 h-6 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='#E5E7EB'
                />
                <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentColor'
                />
            </svg>
            <span className="text-lg">{props.text}</span>
        </div>
    );
}
