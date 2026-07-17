function LoadingSkeleton() {
  return (
    <div className="property-grid">
      {[1, 2, 3, 4].map((item) => (
        <div className="skeleton-card" key={item}>
          <div className="skeleton-image"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;