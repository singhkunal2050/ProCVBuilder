import Resume from "../Resume";
import Resume2 from "../Resume2";

export function Preview({ state }) {
    const { template, resumeRef } = state
    return (
        <section className="min-h-[1200px]">
            <div ref={resumeRef}>
                {template ? <Resume /> : <Resume2 />}
            </div>
        </section>
    )
}
