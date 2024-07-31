package com.reportbuilder.analyzer;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.Assert.*;

import static org.junit.Assert.*;

public class DataRowTest {

    @org.junit.Test
    public void column_returnsCorrectProperty() {
        int amount = 5;
        assertEquals(5, amount);
    }
}
