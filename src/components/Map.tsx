interface MapProps extends React.IframeHTMLAttributes<HTMLIFrameElement> { }

function Map({ className, ...rest }: MapProps) {
    const mapStyles = {
        borderRadius: '1rem',
    };

    return (
        <div className={className} style={mapStyles}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3771278002782!2d-38.53425288813347!3d-3.7276881431555857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749addea9476d%3A0x1e9dbaa967af1bb6!2sTheatro%20Jos%C3%A9%20de%20Alencar!5e0!3m2!1sen!2sbr!4v1721785640824!5m2!1sen!2sbr"
                allowFullScreen={false}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    );
}
export default Map;
