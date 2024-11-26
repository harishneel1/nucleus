// components/pipelines/CreateFromScratchBanner.tsx
import { Plus } from 'lucide-react';

export default function CreateFromScratchBanner() {
    return (
        <button
            className="w-full bg-violet-50 hover:bg-violet-100 transition-colors rounded-lg mb-4 
                     flex items-center justify-between px-4 py-3 group border border-violet-100"
        >
            <div className="flex items-center gap-3">
                <div className="bg-violet-100 group-hover:bg-violet-200 rounded-md p-1.5 transition-colors">
                    <Plus className="w-4 h-4 text-violet-600" />
                </div>
                <div className="text-left">
                    <h3 className="text-gray-900 font-medium text-sm">
                        Create Pipeline from Scratch
                    </h3>
                    <p className="text-gray-500 text-xs">
                        Start with a blank canvas and build your own pipeline
                    </p>
                </div>
            </div>
            <div className="text-violet-600 text-xs font-medium group-hover:translate-x-0.5 transition-transform">
                Click to start →
            </div>
        </button>
    );
}