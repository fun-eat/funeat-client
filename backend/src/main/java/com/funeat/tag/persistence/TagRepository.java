package com.funeat.tag.persistence;

import com.funeat.tag.domain.Tag;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findTagsByIdIn(final List<Long> tagIds);
}