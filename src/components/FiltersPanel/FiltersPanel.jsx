import styles from "./FiltersPanel.module.scss";

const FiltersPanel = ({ filters, onChange, showDiscountFilter = true }) => {
  return (
    <div className={styles.container}>
      <div className={styles.priceFilter}>
        <p className={styles.title}>Price</p>
        <input
          id="priceFrom"
          name="priceFrom"
          type="text"
          placeholder="from"
          value={filters.priceFromInput}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              onChange({ ...filters, priceFromInput: value });
            }
          }}
        />
        <input
          id="priceTo"
          name="priceTo"
          type="text"
          placeholder="to"
          value={filters.priceToInput}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              onChange({ ...filters, priceToInput: value });
            }
          }}
        />
      </div>
      {showDiscountFilter && (
        <div className={styles.discounted}>
          <p className={styles.title}>Discounted items</p>

          <label htmlFor="discountedItems">
            <input
              id="discountedItems"
              name="discountedItems"
              type="checkbox"
              className={styles.checkbox}
              checked={filters.discountOnly}
              onChange={(e) =>
                onChange({ ...filters, discountOnly: e.target.checked })
              }
            />
          </label>
        </div>
      )}
      <div className={styles.sorted}>
        <p className={styles.title}>Sorted</p>
        <select
          value={filters.sortBy}
          onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
        >
          <option value="">by default</option>
          <option value="priceAsc">Price ↑</option>
          <option value="priceDesc">Price ↓</option>
          <option value="nameAZ">Name A - Z</option>
          <option value="nameZA">Name Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersPanel;
