package BusinessLayer.Shops.PurchasePolicies;

import javax.persistence.*;
import java.util.concurrent.atomic.AtomicInteger;

@Entity
@Table(name = "purchase_id_indexer")
public class PurchaseIdIndexer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "indexer")
    private AtomicInteger indexer;

    public PurchaseIdIndexer() {
        indexer = new AtomicInteger(0);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AtomicInteger getIndexer() {
        return indexer;
    }

    public void setIndexer(AtomicInteger indexer) {
        this.indexer = indexer;
    }

    public int addAndGet(int i){
        return indexer.addAndGet(i);
    }

    public Integer get() {
        return indexer.get();
    }

    public int getAndAdd(int i) {
        return indexer.addAndGet(i);
    }
}
