package it.schipani.dataLayer.repositories;

import it.schipani.dataLayer.entities.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<EventEntity, Long> {
}
