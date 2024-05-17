

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="text-orange-400 text-xs italic font-medium mb-2">---{subHeading}---</p>
            <p className="text-2xl font-medium py-1 border-y-2 inline uppercase">{heading}</p>
        </div>
    );
};

export default SectionTitle;