// components/pipelines/PipelineStatus.tsx
'use client';

interface PipelineStatusProps {
    isDeployed: boolean;
    isDraftSaved: boolean;
}

export default function PipelineStatus({ isDeployed, isDraftSaved }: PipelineStatusProps) {
    if (!isDeployed && !isDraftSaved) return null;

    return (
        <>
            {isDraftSaved && (
                <div className="flex items-center gap-1 px-2 py-1 text-sm text-green-600 bg-green-50 rounded-md">
                    <span>Draft saved</span>
                    <button className="hover:text-green-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>
            )}
            {isDeployed && (
                <div className="flex items-center gap-1 px-2 py-1 text-sm text-green-600 bg-green-50 rounded-md">
                    <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                        Changes Deployed
                    </span>
                </div>
            )}
        </>
    );
}